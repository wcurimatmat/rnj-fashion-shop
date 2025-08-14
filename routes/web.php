<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia::render('Home/Index');
});

Route::get('/shop', function () {
    return Inertia::render("Shop/Index");
});

Route::get('/about', function () {
    return Inertia::render("About/Index");
});

Route::get('/shop/product-view', function () {
    return Inertia::render("ProductView/Index");
});