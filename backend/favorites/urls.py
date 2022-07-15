from django.urls import path
from . import views

urlpatterns =[
    path('<int:user_id>/', views.get_all_favorite_movie),
    path('add/<int:user_id>', views.add_favorite_movie), 
    
    ]