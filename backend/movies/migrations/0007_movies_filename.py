# Generated by Django 4.0.4 on 2022-07-18 19:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0006_movies_favorites'),
    ]

    operations = [
        migrations.AddField(
            model_name='movies',
            name='fileName',
            field=models.CharField(default=0, max_length=500),
            preserve_default=False,
        ),
    ]