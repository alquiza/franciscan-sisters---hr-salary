"""core URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework import routers
from core.user import views

router = routers.DefaultRouter()
router.register('users', views.UserViewSet)

from core.attendance import views
router.register('attendances', views.DailyViewSet)

from core.human import views
router.register('identities', views.IdentityViewSet)
router.register('employees', views.EmployeeViewSet)
router.register('contacts', views.ContactViewSet)
router.register('records', views.RecordViewSet)

from core.api import views

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
    path('auth/', ObtainAuthToken.as_view()),
    path('', include('rest_framework.urls', namespace='rest_framework')),
    path('users/', views.UserList.as_view()),
    path('attendances/', views.DailyList.as_view()),
    path('identities/', views.IdentityList.as_view()),
    path('employees/', views.EmployeeList.as_view()),
    path('contacts/', views.ContactList.as_view()),
    path('records/', views.RecordList.as_view()),
    path('users/<int:pk>', views.UserDetail.as_view()),
    path('attendances/<int:pk>', views.DailyDetail.as_view()),
    path('identities/<int:pk>', views.IdentityDetail.as_view()),
    path('employees/<int:pk>', views.EmployeeDetail.as_view()),
    path('contacts/<int:pk>', views.ContactDetail.as_view()),
    path('records/<int:pk>', views.RecordDetail.as_view()),
]
