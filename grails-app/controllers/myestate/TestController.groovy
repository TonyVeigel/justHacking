package myestate

import grails.converters.JSON

class TestController {

    def index() {

        def test = []

        render test as JSON

    }
}
