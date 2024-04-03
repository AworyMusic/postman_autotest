pm.test('Статус 200', function () {
    pm.response.to.have.status(200);
});

pm.test('Время ответа меньше 1 секунды', function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});

pm.test('Content-Type предоставлен', function () {
    pm.response.to.have.header('Content-Type');
});

pm.test('В ответе jsonBody указан)))', function () {
    pm.response.to.have.jsonBody;
});

pm.test("Сравнение значений в body", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Sentinel-class landing craft");
    pm.expect(jsonData.model).to.eql("Sentinel-class landing craft");
    pm.expect(jsonData.manufacturer).to.eql("Sienar Fleet Systems, Cyngus Spaceworks");
    pm.expect(jsonData.cost_in_credits).to.eql("240000");
    pm.expect(jsonData.cost_in_credits).to.eql("240000");
    pm.expect(jsonData.length).to.eql("38");
    pm.expect(jsonData.max_atmosphering_speed).to.eql("1000");
    pm.expect(jsonData.crew).to.eql("5");
    pm.expect(jsonData.passengers).to.eql("75");
});

pm.test("В списке Fillms 1 строка", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.films.length).to.be.eql(1);
});

pm.test ("В ответе Content-Type is application/json", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");
});

pm.test("Массив Films содержит по крайней мере одну непустую строку", function () {
    const responseData = pm.response.json();
    pm.expect(responseData.films).to.be.an('array').that.is.not.empty;
    responseData.films.forEach(function(film) {
        pm.expect(film).to.be.a('string').and.to.have.lengthOf.at.least(1, "Значение не должно быть пустым");
    });
});