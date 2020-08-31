from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from core.attendance.models import Daily
from core.attendance.serializers import DailySerializer
from core.human.models import Identity, Employee, Contact, Record
from core.user.serializers import UserSerializer
from core.human.serializers import IdentitySerializer, EmployeeSerializer, \
    ContactSerializer, RecordSerializer


class DailyList(generics.ListCreateAPIView):
    queryset = Daily.objects.all()
    serializer_class = DailySerializer


class DailyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Daily.objects.all()
    serializer_class = DailySerializer


class RecordList(generics.ListCreateAPIView):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer


class RecordDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer


class ContactList(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class ContactDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class EmployeeList(generics.ListCreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class EmployeeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class IdentityList(generics.ListCreateAPIView):
    queryset = Identity.objects.all()
    serializer_class = IdentitySerializer


class IdentityDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Identity.objects.all()
    serializer_class = IdentitySerializer


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
