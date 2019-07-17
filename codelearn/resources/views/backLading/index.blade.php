@extends('master')
@section('main')
{{-- MAIN --}}
    <div class="main">
        <div class="container-fluid" id="header-fixed">
            <div class="row">
            <div class="col-md-8">
                <div class="container-fluid" id="header-fixed">
                    <div class="row">
                        <div class="col-md-12 ui-blocked">
                            <div class="ui-blocked__banner">
                                <a href="#"> <img src="https://codelearn.io/CodeCamp/CodeCamp/Upload/3392832b6e35495aa6279cd2ae4f25cc.jpg" alt=""></a>
                            </div>
                            <div class="ui-blocked__body">
                                <div class="ui-blocked__body-title">
                                FSOFT CODEWAR 2019
                                </div>
                                <div class="ui-blocked__body-description">
                                    Cuộc thi code dành cho Fsofter khối sản xuất của FPT Software và các đ...
                                </div>
                            </div>

                            <div class="ui-blocked__bottom">
                                <div class="ui-blocked__bottom-resUser">Đăng ký: <span style="color:red">160/180</span> đội</div>
                                <div class="ui-blocked__bottom-countdown" >
                                    <!-- Start Countdown HTML -->

                                <div id="clockcontainer">
                                    <div id="clockdiv">
                                        <div>
                                        <span class="days"></span>
                                        <div class="smalltext">Days</div>
                                        </div>
                                        <div>
                                        <span class="hours"></span>
                                        <div class="smalltext">Hours</div>
                                        </div>
                                        <div>
                                        <span class="minutes"></span>
                                        <div class="smalltext">Minutes</div>
                                        </div>
                                        <div>
                                        <span class="seconds"></span>
                                        <div class="smalltext">Seconds</div>
                                        </div>
                                    </div>
                                </div>
                                {{-- end countdown html --}}

                                    <button type="button" class="btn btn-danger">KẾT THÚC CUỘC THI</button>
                                </div>
                                <div class="ui-blocked__bottom-top1-user"><img src="https://codelearn.io/CodeCamp/CodeCamp/Styles/images/1stRank.png" alt=""> STU.HCM</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="container-fluid" id="header-fixed">
                    <div class="row">
                    <div class="col-md-6">
                        <div class="ui-block ">
                            <div class="ui-block-title">Học tập</div>
                            <div class="ui-block-body">
                                <div class="source-icon">
                                    <img src="https://codelearn.io/CodeCamp/CodeCamp/Styles/images/MyCourses.svg" alt="">
                                </div>
                                <div class="source-name">
                                    <a href="#">C++ fundamentals</a>
                                </div>
                                <div class="source-title">
                                    C++ Fundamentals is designed to give you everything you need to become a productive C++ develo...
                                </div>
                            </div>
                            <div class="ui-block-footer">
                                <div class="complete-task">
                                    <span>0</span>
                                    <div class="text">Hoàn thành</div>
                                </div>
                                
                                <div class="do-task">
                                    <span>74</span>
                                    <div class="text">Phải làm</div>
                                </div>
                                
                                <div class="total-task">
                                    <span>74</span>
                                    <div class="text">Bài tập</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="ui-block ">
                            <div class="ui-block-title">Hoạt động của bạn</div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
            <div class="col-md-4">
                <div class="container-fluid" id="header-fixed">
                    <div class="row">
                    
                    </div>
                </div>
                
            </div>
        </div>
        </div>
        
    </div>
    {{-- MAIN --}}
@endsection