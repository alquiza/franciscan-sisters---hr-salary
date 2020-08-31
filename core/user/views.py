from django.contrib.auth.models import User
from core.user.serializers import UserSerializer
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
##    authentication_classes = (TokenAuthentication, )
##    permission_classes = (IsAuthenticated, )
