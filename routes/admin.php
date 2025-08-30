<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

// admin routes

Route::get('/login', function () {
    return Inertia::render('Admin/Auth/Login');
});

Route::get("/dashboard", function () {
    return Inertia::render('Admin/Dashboard/Index');
});