<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    @viteReactRefresh
    @vite(['resources/js/app.js', 'resources/css/app.css'])
    @inertiaHead
    @routes
</head>

<body class="font-quattrocento-sans leading-none text-gray-800 antialiased">
    @inertia
</body>

</html>
