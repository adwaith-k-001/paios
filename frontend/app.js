async function sendMessage() {

    const input = document.getElementById("message")
    const message = input.value

    const chat = document.getElementById("chat")

    chat.innerHTML += `<p><b>You:</b> ${message}</p>`

    const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: message })
    })

    const data = await response.json()

    chat.innerHTML += `<p><b>PAIOS:</b> ${data.response}</p>`

    input.value = ""
}