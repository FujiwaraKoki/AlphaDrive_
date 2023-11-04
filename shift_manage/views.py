# from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ShiftTypeSerializer, GroupCompanySerializer, EmployeeShiftSerializer, MaxOfficeHourSerializer
from .models import ShiftType, GroupCompany, EmployeeShift, MaxOfficeHour


class ShiftTypeViewSet(viewsets.ModelViewSet):
    queryset = ShiftType.objects.all()
    serializer_class = ShiftTypeSerializer


class GroupCompanyViewSet(viewsets.ModelViewSet):
    queryset = GroupCompany.objects.all()
    serializer_class = GroupCompanySerializer


class EmployeeShiftViewSet(viewsets.ModelViewSet):
    queryset = EmployeeShift.objects.all()
    serializer_class = EmployeeShiftSerializer


class MaxOfficeHourViewSet(viewsets.ModelViewSet):
    queryset = MaxOfficeHour.objects.all()
    serializer_class = MaxOfficeHourSerializer