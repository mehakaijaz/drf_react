from django.urls import path 
from ecomapp import views

urlpatterns = [
    path('',views.getRoutes,name='routes'),
    path('products/',views.getProducts,name='products')
]
