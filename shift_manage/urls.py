from django.urls import path
from django.conf.urls import include
from rest_framework.routers import DefaultRouter
from .views import ShiftTypeViewSet, GroupCompanyViewSet, EmployeeShiftViewSet, MaxOfficeHourViewSet

router = DefaultRouter()
router.register('ShiftType', ShiftTypeViewSet)
router.register('GroupCompany', GroupCompanyViewSet)
router.register('EmployeeShift', EmployeeShiftViewSet)
router.register('MaxOfficeHour', MaxOfficeHourViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
