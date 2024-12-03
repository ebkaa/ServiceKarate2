Feature: Retry Until Örneği


  @apiYanit
  Scenario: apiYanit
    Given url 'https://yesno.wtf/api'
    * retry until response.answer == 'yes1'
    When method GET
    Then status 200
    And print 'Cevap: ', response.answer
