<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormFieldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('form_fields', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('group_id')->nullable();
            $table->enum('type', config('formbuilder.fields'));
            $table->string('name');
            $table->string('label')->nullable();
            $table->string('default')->nullable();
            $table->string('placeholder')->nullable();
            $table->string('classes')->nullable();
            $table->string('style_id')->nullable();
            $table->longText('attributes')->nullable();
            $table->integer('sort')->default(999);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('form_fields');
    }
}
