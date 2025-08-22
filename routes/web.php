<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia::render('User/Home/Index');
});

Route::get('/shop', function () {
    return Inertia::render("User/Shop/Index");
});

Route::get('/about', function () {
    return Inertia::render("User/About/Index");
});

Route::get('/shop/product-view', function () {
    return Inertia::render("User/ProductView/Index");
});

Route::get("/account/login", function () {
    return Inertia::render('User/Auth/Login');
})->name('login');

Route::get('/account/register', function () {
    return Inertia::render('User/Auth/Register');
})->name('register');

Route::get('/cart', function () {
    return Inertia::render("User/Cart/Index");
});

Route::get('/account', function () {
    return Inertia::render('User/Account/Orders/Index');
})->name('account.orders.index');

Route::get('/account/details', function () {
    return Inertia::render('User/Account/Details/Index');
})->name('account.details.index');

Route::get('/account/address-book', function () {
    return Inertia::render('User/Account/AddressBook/Index');
})->name('account.address-book.index');

Route::get('/account/address-book/create', function () {
    return Inertia::render('User/Account/AddressBook/Create');
})->name('account.address-book.create');