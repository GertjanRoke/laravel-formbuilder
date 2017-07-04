@extends('Formbuilder::template')

@section('content')
    <formbuilder api-prefix="{{ config('formbuilder.prefix.api') }}"></formbuilder>
@endsection
