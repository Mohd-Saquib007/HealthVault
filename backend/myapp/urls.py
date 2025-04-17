from django.urls import path
from .views import create_record, get_records

urlpatterns = [
    path('api/records/', get_records),
    path('api/records/create/', create_record),
]