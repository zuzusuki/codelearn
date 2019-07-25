@extends('master')
@section('main')

{{-- MAIN --}}
    <div class="main">
        <div class="container">
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
                    <div class="col-md-6 learn">
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
                    <div class="col-md-6 hoatdong">
                        <div class="ui-block2 ">
                            <div class="ui-block2-title">Hoạt động của bạn</div>
                            <div class="ui-block2-calender">
                                <div class="day">Mon</div>
                                <div class="day">Tue</div>
                                <div class="day">Wed</div>
                                <div class="day">Thu</div>
                                <div class="day">Fri</div>
                                <div class="day">Sat</div>
                                <div class="day">Sun</div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                            </div>
                            <div class="level">
                                <div>Level</div>
                                <div class="item"></div>
                                <div class="item1"></div>
                                <div class="item2"></div>
                                <div class="item3"></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
            <div class="col-md-4">
                <div class="container-fluid" id="header-fixed">
                    <div class="row">
                        <div class="top-user">
                            <img  src="https://codelearn.io/CodeCamp/CodeCamp/Styles/images/ChallengesIcon.svg">
                            <div class="challenge-title">Luyện tập mỗi ngày</div>
                            <div id="challenge-desc">
                                Bài tập có nhiều lượt nộp nhất trong 4 ngày gần đây.
                            </div>
                            <div class="challenge-task">
                                <div class="challenge-task-title">
                                    <span class="challenge-task-title__1">isPowerOfFour</span> 
                                    <span class="challenge-task-title__2">Đơn giản</span>
                                </div>
                                <div class="challenge-task-tag">Bit Manipulation</div>
                                <div class="challenge-task-img">
                                    <img src="https://codelearn.io/CodeCamp/CodeCamp/Upload/Avatar/81fc74f9b8d4439e97b1d6e1641f417d.jpg" alt="">
                                    <div>1231231</div>
                                </div>
                                <div class="challenge-task-hot"><button class="btn btn-danger">BÀI NỔI BẬT</button> </div>
                                <div class="challenge-task-info">
                                    <div><img src="https://codelearn.io/Themes/TheCodeCamppro/assets/code-learn/user-challenges.svg?v=11" alt=""> 755/783</div>
                                    
                                    <div><img src="https://codelearn.io/Themes/TheCodeCamppro/assets/code-learn/comment.svg?v=11" alt=""> 14</div>
                                    
                                    <div><img src="https://codelearn.io/Themes/TheCodeCamppro/assets/code-learn/task-point.svg?v=11" alt=""> 120</div>
                                </div>
                            </div>
                            <div class="task-level">
                                    <div class="task-level-easy">
                                        <span>Đơn giản</span>
                                        <div>1/128</div>
                                    </div>
                                    <div class="task-level-normal">
                                        <span>Trung bình</span>
                                        <div>1/128</div>
                                    </div>
                                    <div class="task-level-hard">
                                        <span>Phức tạp</span>
                                        <div>1/128</div>
                                    </div>
                                </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
        </div>
        </div>
        
        
    </div>
    {{-- MAIN --}}
    
@endsection