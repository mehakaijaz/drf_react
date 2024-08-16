from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
#from .products import *
from .serializers import ProductSerializers
from .models import Products

@api_view(['GET'])
def getRoutes(request):
    return Response('hello')

@api_view(['GET'])
def getProducts(request):
    products=Products.objects.all()
    serializer=ProductSerializers(products,many=True)
    return Response(serializer.data)