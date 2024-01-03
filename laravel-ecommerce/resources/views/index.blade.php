<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Artisan</title>


    <link rel="icon" type="image/png" href="{{ asset('assets/artisan_logo.png') }}" sizes="64x64">
    <link rel="icon" type="image/png" href="{{ asset('assets/artisan_logo.png') }}" sizes="64x64">

    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons|Material+Icons+Outlined" rel="stylesheet" type="text/css">
    <link href="https://cdn.jsdelivr.net/npm/quasar@2.11.7/dist/quasar.prod.css" rel="stylesheet" type="text/css">

</head>

<body>
    <div id="app">

    </div>

    @vite('resources/js/app.js')
</body>

</html>
