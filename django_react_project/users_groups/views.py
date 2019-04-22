from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from .models import User, Group
from .serializers import *


@api_view(['GET', 'POST'])
def group_list(request):
    if request.method == 'GET':
        data = []
        next_page = 1
        previous_page = 1

        groups = Group.objects.all()

        page = request.GET.get('page', 1)
        paginator = Paginator(groups, 10)

        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        group_serializer = GroupSerializer(data, context={'request': request}, many=True)

        if data.has_next():
            next_page = data.next_page_number()
        if data.has_previous():
            previous_page = data.previous_page_number()

        return Response({'data': group_serializer.data, 'count': paginator.count, 'numpages': paginator.num_pages, 'next_link': '/api/groups/?page=' + str(next_page), 'prev_link': '/api/groups/?page=' + str(previous_page)})

    elif request.method == 'POST':
        group_serializer = GroupSerializer(data=request.data)
        if group_serializer.is_valid():
            group_serializer.save()
            return Response(group_serializer.data, status=status.HTTP_201_CREATED)
        return Response(group_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def group_actions(request, pk):
    try:
        some_group = Group.objects.get(pk=pk)
    except Group.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        group_serializer = GroupSerializer(some_group, context={'request': request})
        return Response(group_serializer.data)

    elif request.method == 'PUT':
        group_serializer = GroupSerializer(some_group, data=request.data, context={'request': request})

        if group_serializer.is_valid():
            group_serializer.save()
            return Response(group_serializer.data)

        return Response(group_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        some_group.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def user_list(request):
    if request.method == 'GET':
        data = []
        next_page = 1
        previous_page = 1

        users = User.objects.all()

        page = request.GET.get('page', 1)
        paginator = Paginator(users, 10)

        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        user_serializer = UserSerializer(data, context={'request': request}, many=True)

        if data.has_next():
            next_page = data.next_page_number()
        if data.has_previous():
            previous_page = data.previous_page_number()

        return Response({'data': user_serializer.data, 'count': paginator.count, 'numpages': paginator.num_pages, 'next_link': '/api/users/?page=' + str(next_page), 'prev_link': '/api/users/?page=' + str(previous_page)})

    elif request.method == 'POST':
        user_serializer = UserSerializer(data=request.data)
        if user_serializer.is_valid():
            user_serializer.save()
            return Response(user_serializer.data, status=status.HTTP_201_CREATED)
        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def user_actions(request, pk):
    try:
        some_user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        user_serializer = UserSerializer(some_user, context={'request': request})
        return Response(user_serializer.data)

    elif request.method == 'PUT':
        user_serializer = UserSerializer(some_user, data=request.data, context={'request': request})

        if user_serializer.is_valid():
            user_serializer.save()
            return Response(user_serializer.data)

        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        some_user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
