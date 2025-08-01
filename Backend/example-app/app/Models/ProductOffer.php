<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductOffer extends Model
{
    /** @use HasFactory<\Database\Factories\ProductOfferFactory> */
    use HasFactory;
    protected $guarded = ['id'];
}
