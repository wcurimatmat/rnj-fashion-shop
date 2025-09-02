<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

// admin routes

Route::get('/login', function () {
    return Inertia::render('Admin/Auth/Login');
});

Route::get("/dashboard", function () {
    return Inertia::render('Admin/Dashboard/Index');
})->name('dashboard.index');

Route::get('/products', function () {
    return Inertia::render('Admin/Products/Index');
})->name('products.index');

Route::get('/orders', function () {
    return Inertia::render('Admin/Orders/Index');
})->name('orders.index');

Route::get('/customers', function () {
    return Inertia::render('Admin/Customers/Index');
})->name('customers.index');