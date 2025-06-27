from django.urls import path

from .views import NoteViewSet


urlpatterns = [
    path('notes', NoteViewSet.as_view({'get': 'list'}), name='notes')
]
