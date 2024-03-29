import pytest, mock
from unittest import TestCase
from api import members


class ApiTester(TestCase):

    def test_members(self) -> None:
        ret = members()

        assert ret == {"members": ["m1", "m2", "m3"]}





