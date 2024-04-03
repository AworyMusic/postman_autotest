//Выбор своего покемона для битвы
pm.test("Время ответа меньше 1 секунды", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Выбор своего покемона для битвы", function () {
var jsonData = pm.response.json();
pm.collectionVariables.set("pokemon_id", jsonData.data[0].id);
});


//Выбор Покемона у другово тренера
pm.test('Время ответа меньше 1 секунды', function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
})

pm.test('Status code is 200', function () {
    pm.response.to.have.status(200);
})

pm.test("Выбор Покемона у другово тренера", function () {
  var jsonData = pm.response.json();
  pm.collectionVariables.set("pokemon2_id", jsonData.data[5].id);
});