from django.urls import path
from django.conf.urls import include
from rest_framework.routers import DefaultRouter
from .views import CustomUserViewSet

router = DefaultRouter()
router.register(r'CustomUser', CustomUserViewSet)

"""
urlpatterns = [

] + router.urls
"""

urlpatterns = [
    path('', include(router.urls)),
]
