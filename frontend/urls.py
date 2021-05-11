from django.urls import path
from .views import index

app_name = 'frontend'

urlpatterns = [
    path('', index, name=''),
    path('login', index),
    path('signup', index),
    path('app', index),
    path('info', index),
    path('join', index),
    path('create', index),
    path('room/<str:roomCode>', index)
]