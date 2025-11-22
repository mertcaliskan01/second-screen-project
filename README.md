# Second Screen Project 🖥️➡️💻

A lightweight peer-to-peer screen sharing application that turns your second device into a wireless display monitor using WebRTC and PeerJS.

## 🎯 What It Does

This application allows you to share your Mac's screen with another device (like a Windows laptop, iPad, or any device with a browser) over your local network in real-time. Perfect for:

- Using an old laptop as a second monitor
- Wireless screen mirroring without additional hardware
- Presentations and demonstrations
- Extended workspace setup

## 🏗️ How It Works

The project uses **PeerJS** (built on WebRTC) for peer-to-peer video streaming, eliminating the need for cloud services or external servers.

**Architecture:**

1. **Express Server** - Serves HTML pages and manages connections
2. **PeerJS Server** - Handles peer-to-peer signaling
3. **Streamer (Mac)** - Captures and broadcasts screen
4. **Viewer (Second Device)** - Receives and displays the stream

```
┌─────────────┐         ┌──────────────┐         ┌─────────────┐
│   Mac       │  WebRTC │  PeerJS      │  WebRTC │   Viewer    │
│ (Streamer)  │◄───────►│   Server     │◄───────►│  (Laptop)   │
│             │         │  Port: 9000  │         │             │
└─────────────┘         └──────────────┘         └─────────────┘
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Two devices on the same local network
- Modern web browser with WebRTC support

### Installation

1. **Clone the repository:**

```bash
git clone <your-repo-url>
cd second-screen-project
```

2. **Install dependencies:**

```bash
npm install
```

3. **Find your Mac's IP address:**

```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

4. **Update IP addresses in the HTML files:**

Open `public/streamer.html` and `public/viewer.html`, then update:

```javascript
const MAC_IP_ADDRESS = ""; // Change to your Mac's IP
```

### Running the Application

1. **Start the server on your Mac:**

```bash
node server.js
```

You should see:

```
Web server running at http://localhost:3000
PeerJS Server running at :9000/myapp
```

2. **Open the streamer page on your Mac:**

```
http://localhost:3000/streamer.html
```

3. **Click "Start Screen Sharing"** and select the screen/window to share

4. **Open the viewer page on your second device:**

```
http://[YOUR_MAC_IP]:3000/viewer.html
```

The screen should now appear on your second device! 🎉

## 📁 Project Structure

```
second-screen-project/
├── server.js              # Express & PeerJS server
├── package.json           # Dependencies
└── public/
    ├── streamer.html      # Mac screen broadcaster
    └── viewer.html        # Second device display
```

## 🔧 Configuration

### Ports

- **Web Server:** Port `3000` (for serving HTML pages)
- **PeerJS Server:** Port `9000` (for WebRTC signaling)

You can change these in `server.js`:

```javascript
const port = 3000; // Web server port
const peerPort = 9000; // PeerJS port
```

### Video Quality

To adjust video quality, modify the constraints in `streamer.html`:

```javascript
const stream = await navigator.mediaDevices.getDisplayMedia({
  video: {
    width: { ideal: 1920 },
    height: { ideal: 1080 },
    frameRate: { ideal: 30 },
  },
  audio: false,
});
```

## 🐛 Troubleshooting

### Connection Issues

- Ensure both devices are on the **same network**
- Check if firewall is blocking ports `3000` and `9000`
- Verify the IP address is correct in both HTML files

### No Video Appearing

- Make sure you clicked "Start Screen Sharing" on the Mac first
- Try refreshing the viewer page
- Check browser console for errors (F12)

### Performance Issues

- Reduce video quality settings
- Ensure strong Wi-Fi connection
- Close unnecessary applications

## 🛠️ Technologies Used

- **[Express.js](https://expressjs.com/)** - Web server framework
- **[PeerJS](https://peerjs.com/)** - WebRTC wrapper for easy P2P connections
- **[WebRTC](https://webrtc.org/)** - Real-time communication
- **[MediaDevices API](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices)** - Screen capture

## 📝 License

ISC
