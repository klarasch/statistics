# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-11-10 14:03
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('statistics', '0033_auto_20170225_0033'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='session',
            name='session_color',
        ),
    ]
