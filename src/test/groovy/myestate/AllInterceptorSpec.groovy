package myestate


import grails.test.mixin.TestFor
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.web.ControllerUnitTestMixin} for usage instructions
 */
@TestFor(AllInterceptor)
class AllInterceptorSpec extends Specification {

    def setup() {
    }

    def cleanup() {

    }

    void "Test all interceptor matching"() {
        when:"A request matches the interceptor"
            withRequest(controller:"all")

        then:"The interceptor does match"
            interceptor.doesMatch()
    }
}
