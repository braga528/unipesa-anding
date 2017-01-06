;(function(){

	class UserLocation{
		static get(callback){
			if(navigator.geolocation){
				navigator.geolocation.getCurrentPosition((location)=>{
					callback({
						lat: location.coords.latitude,
						lng: location.coords.longitude
					})
				})
			}else{
				alert("No podemos detectar donde te encuentras.")
			}
			
		}
	}

	const my_place = {
					lat: 20.9519444,
					lng: -101.7113888
				}

	google.maps.event.addDomListener(window,"load",()=>{
		const map = new google.maps.Map(
			document.getElementById('map'),
			{
				center: my_place,
				zoom: 5
			}
		)

		const marker = new google.maps.Marker({
			map: map,
			position: my_place,
			title: "Unipesa",
			visible: true
		})

	UserLocation.get((coords)=>{
		//calcular distancia al destino.

		let origen = new google.maps.LatLng(coords.lat,coords.lng)
		let destino = new google.maps.LatLng(my_place.lat,my_place.lng)
		let service = new google.maps.DistanceMatrixService()

		service.getDistanceMatrix({
			origins: [origen],
			destinations: [destino],
			travelMode: google.maps.TravelMode.DRIVING
		},(response, status)=>{
			if(status === google.maps.DistanceMatrixStatus.OK){
				const duration_element = response.rows[0].elements[0]
				const duracion_viaje = duration_element.duration.text
				document.querySelector("#message")
						.innerHTML = `
							Estas a ${duracion_viaje} de llegar a nuestra sucursal.
						`
			}
		})


	})
		
	})
})()

