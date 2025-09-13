class DevicesService {
    constructor(){}

    async trafficLightTester(){
        const eventSource = new EventSource("http://localhost:3000/semaforo/test?ids=123,124");
        eventSource.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log("Resultado parcial:", data);
        };
    }
}