from django.db import models

# Create your models here.
class Profile(models.Model):

    class Meta:
        verbose_name = 'Profile'
        verbose_name_plural = 'Profiles'

    def __str__(self):
        return self.first_name + " " + self.last_name
    
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    age = models.IntegerField()
    is_child = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

class Tooth(models.Model):
    
    class Meta:
        verbose_name = 'Tooth'
        verbose_name_plural = 'Teeth'
    
    profile = models.ForeignKey(Profile, related_name='teeth', on_delete=models.CASCADE)
    number = models.IntegerField()
    state = models.CharField(max_length=50, choices=[
        ('1','fracture'),
        ('2','decay'),
        ('3','missing'),
        ('4','missing-indicated'),
        ('5','prostheses-good'), 
        ('6','prostheses-bad'),
        ('7','filling-good') , 
        ('8','filling-bad') , 
        ('9','sealant-good') ,
        ('10','sealant-bad')
    ])