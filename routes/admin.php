<?php

use App\Http\Controllers\CategoryCollectionController;
use App\Http\Controllers\ProductController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

// admin routes

Route::get('/login', function () {
    return Inertia::render('Admin/Auth/Login');
});

Route::get("/dashboard", function () {
    return Inertia::render('Admin/Dashboard/Index');
})->name('dashboard.index');

// Products

Route::resource('products', ProductController::class);

Route::resource("categories-and-collections", CategoryCollectionController::class);

Route::get('/orders', function () {
    return Inertia::render('Admin/Orders/Index');
})->name('orders.index');

Route::get('/customers', function () {
    return Inertia::render('Admin/Customers/Index');
})->name('customers.index');

Route::get("/administration", function () {
    return Inertia::render("Admin/Settings/Administration");
})->name("settings.administration");

Route::get("/notifications", function () {
    return Inertia::render("Admin/Settings/Notification");
})->name("settings.notification");

Route::get("/payment-method", function () {
    return Inertia::render("Admin/Settings/PaymentMethod");
})->name("settings.payments");

Route::get("/store", function () {
    return Inertia::render("Admin/Settings/Store");
})->name("settings.store");

Route::get("/tax", function () {
    return Inertia::render("Admin/Settings/Tax");
})->name("settings.tax");
