var defaultPage = '/';
var apiLogin = {
    login: 'api/users/login',
    signup: 'api/users/CodeCampAccount/register',
}

$(document).ready(function () {
    translate.onLoad(function () {
        $('#loginModal').on('hidden.bs.modal', function (e) {
            $("#frmLogin")[0].reset();
            //$("#frmSignup")[0].reset();

            LOGIN_VALIDATOR && LOGIN_VALIDATOR.resetForm();
            //SIGNUP_VALIDATOR && SIGNUP_VALIDATOR.resetForm();
        })

        // submit
        $("#frmLogin").submit(function (event) {
            event.preventDefault();
            // validation form
            LOGIN_VALIDATOR = $(this).validate({
                rules: {
                    username: {
                        required: true,
                        minlength: 3,
                        maxlength: 30,
                        pattern: /^[A-Za-z0-9_.@]+$/
                    },
                    password: {
                        required: true,
                        minlength: 7
                    }
                },
                messages: {
                    username: {
                        required: translate.instant("SERVER_MSG_7003"),
                        minlength: translate.instant("PAGES_LOGIN_ERRORS_USERNAME_MINLENGTH"),
                        maxlength: translate.instant("PAGES_LOGIN_ERRORS_USERNAME_MAXLENGTH"),
                        pattern: translate.instant("PAGES_LOGIN_ERRORS_USERNAME_INVALID")
                    },
                    password: {
                        required: translate.instant("SERVER_MSG_7002"),
                        minlength: translate.instant("PAGES_LOGIN_ERRORS_PASSWORD_MINLENGTH")
                    }
                }
            });

            if ($(this).valid()) {
                login($("#frmLogin").serialize());
            }
        });

        $("#frmSignup").submit(function (event) {
            event.preventDefault();

            SIGNUP_VALIDATOR = $(this).validate({
                rules: {
                    email: {
                        required: true,
                        email: true
                    },
                    username: {
                        required: true,
                        minlength: 3,
                        maxlength: 30,
                        pattern: /^[A-Za-z0-9_.@]+$/
                    },
                    password: {
                        required: true,
                        minlength: 7
                    }
                },
                messages: {
                    email: {
                        required: translate.instant("PAGES_SIGNUP_ERRORS_EMAIL_INVALID"),
                        email: translate.instant("SERVER_MSG_7007")
                    },
                    username: {
                        required: translate.instant("SERVER_MSG_7003"),
                        minlength: translate.instant("PAGES_SIGNUP_ERRORS_USERNAME_MINLENGTH"),
                        maxlength: translate.instant("PAGES_SIGNUP_ERRORS_USERNAME_MAXLENGTH"),
                        pattern: translate.instant("PAGES_SIGNUP_ERRORS_USERNAME_INVALID")
                    },
                    password: {
                        required: translate.instant("PAGES_LOGIN_ERRORS_PASSWORD_REQUIRED"),
                        minlength: translate.instant("PAGES_LOGIN_ERRORS_PASSWORD_MINLENGTH")
                    }
                }
            });

            if ($(this).valid()) {
                var frmSignup = $("#frmSignup").serialize();
                var username = $('#frmSignup input[name="username"]').val();
                var password = $('#frmSignup input[name="password"]').val();
                PKLService.post({
                    api: apiLogin.signup,
                    loading: $("#frmSignup"),
                    data: frmSignup + "&confirmpassword=" + password,
                    OnSuccess: function (resp) {
                        $.notify(translate.instant(resp.Message), {
                            type: 'success',
                            delay: 10000
                        });
                        $("#frmSignup")[0].reset();
                        $('#loginModal a[data-target="#login"]').tab('show');
                        $('#frmLogin input[name="username"]').val(username);
                    }
                });
            }
        });
    });
});

function login(data) {
    PKLService.post({
        api: apiLogin.login,
        loading: $("#frmLogin"),
        data: data,
        OnSuccess: function (resp) {
            $("#frmLogin")[0].reset();
            PKLService.loading.addRequest();
            window.location.href = resp;
			//window.location.href = '/';
        }
    });
}

function checkLoginState() {
    if (isLoadedFacebook == true) {

        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                var token = response.authResponse.accessToken;

                FB.api('/me', { fields: 'email' }, function (resp) {
                    if (typeof resp.email === "undefined" || resp.email == '') {
                        $.notify("You are logging into facebook without an email. Please update!", {
                            type: "codecamp-danger"
                        });
                        return;
                    }

                    var requestParam = {
                        email: resp.email,
                        token: token,
                        provider: "Facebook"
                    };

                    login(requestParam);
                });
            } else if (response.status === 'not_authorized') {
                facebookSignIn();
                //$.notify("The user hasn't authorized your application.", {
                //    type: "codecamp-danger"
                //});
            } else {
                facebookSignIn();
                //$.notify("The user isn't logged in to Facebook.", {
                //    type: "codecamp-danger"
                //});
            }
        }, true);
    } else {
        $.notify(translate.instant("SERVER.MSG_1020"), {
            type: "codecamp-danger"
        });
    }
}

// social
function facebookSignIn() {
    if (isLoadedFacebook == true) {
        FB.login(function (response) {
            if (response.status === 'connected') {
                var token = response.authResponse.accessToken;
                FB.api('/me', { fields: 'email' }, function (resp) {
                    if (typeof resp.email === "undefined" || resp.email == '') {
                        $.notify("You are logging into facebook without an email. Please update!", {
                            type: "codecamp-danger"
                        });
                        return;
                    }

                    var requestParam = {
                        email: resp.email,
                        token: token,
                        provider: "Facebook"
                    };

                    login(requestParam);
                });
                // Logged into your app and Facebook.
            } else {
                // The person is not logged into this app or we are unable to tell. 
            }
        }, {
                scope: 'public_profile,email',
                return_scopes: true
            });
    }
    else {
        $.notify(translate.instant("SERVER.MSG_1020"), {
            type: "codecamp-danger"
        });
    }
}

function googleSignIn() {
    var element = document.getElementById("googleSignIn");

    gapi.load('auth2', function () {
        auth2 = gapi.auth2.init({
            client_id: googleId,
            cookiepolicy: 'single_host_origin',
            scope: 'profile'
        });

        auth2.attachClickHandler(element, {},
            function (googleUser) {
                var profile = googleUser.getBasicProfile();
                var requestParam = {
                    email: profile.getEmail(),
                    token: gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token,
                    provider: "Google"
                };

                login(requestParam);
            }, function (error) {
                console.log('Sign-in error', error);
            }
        );
    });
}