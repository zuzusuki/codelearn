<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
    <link rel="stylesheet" href="{!! asset('css/app.css')!!}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Document</title>
</head>
<body>
    <div id="app">
        <LandingHeader></LandingHeader>
    </div>
    <script src="{!!asset('js/app.js')!!}"></script>
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
</body>
    
</html>