<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;

    
    protected $fillable = ['nombre','codigo','existencia','id_bodega','description','estado'];


    //realcion uno a muchos
    /**
     * Get all of the bodegas for the productos
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function bodegas()
    {
        return $this->hasOne('App\Models\Bodega', 'id', 'id_bodega');
    }
}

