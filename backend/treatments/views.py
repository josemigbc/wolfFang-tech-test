from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.routers import SimpleRouter
from rest_framework.request import Request
from rest_framework.response import Response
from .serializers import ProfileSerializer
from .models import Profile, Tooth

class ProfileViewset(ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()
    
    @action(methods=['POST'], detail = True)
    def odontogram(self, request: Request, pk):
        profile = self.get_object()
        for n, value in request.data.items():
            tooth, _ = Tooth.objects.get_or_create(profile=profile, number = n)
            tooth.state = value
            tooth.save()
        return Response(status=200)

router = SimpleRouter()
router.register('profile', ProfileViewset)