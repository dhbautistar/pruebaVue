<?php

namespace App\Http\Controllers;

use App\Models\Bodega;
use App\Models\Producto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $productos = Producto::all();
        return $productos;
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function bodegas()
    {
        $bodegas = Bodega::all();
        return $bodegas;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $producto = new Producto();
        $producto->nombre = $request->nombre;
        $producto->codigo = $request->codigo;
        $producto->existencia = $request->existencia;
        $producto->id_bodega = $request->id_bodega;
        $producto->descripcion = $request->descripcion;
        $producto->estado = $request->estado;
        
        $producto->save();
        //return $producto;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function filter(Request $request)
    {
        if ($request->buscador) {
            $productos = Producto::where('nombre', 'LIKE', '%'.$request->buscador.'%')->get();
        } else {
            $productos = Producto::all();
      }

      return $productos;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function conteo()
    {
        $conteo = Producto::select("bodegas.nombre as bodega", DB::Raw("count(*) count"))
            ->join("bodegas","bodegas.id","=","productos.id_bodega")
            ->groupBy("bodega")
            ->get()->toArray();
        return $conteo;

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $producto = Producto::find($request->id);
        $producto->nombre = $request->nombre;
        $producto->codigo = $request->codigo;
        $producto->existencia = $request->existencia;
        $producto->id_bodega = $request->id_bodega;
        $producto->descripcion = $request->descripcion;
        $producto->estado = $request->estado;
        $producto->save();
        return $producto;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
