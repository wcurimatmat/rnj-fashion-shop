<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia::render('Home/Index');
});

Route::get('/shop', function () {
    return Inertia::render("Shop/Index");
});