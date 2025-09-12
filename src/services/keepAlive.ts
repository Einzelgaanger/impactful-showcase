// Keep-alive service to prevent Render free tier spin-down
class KeepAliveService {
  private intervalId: NodeJS.Timeout | null = null;
  private readonly PING_INTERVAL = 14 * 60 * 1000; // 14 minutes (Render spins down after 15 minutes)
  private readonly PING_URL = '/api/ping'; // We'll create this endpoint

  start() {
    if (typeof window === 'undefined') return; // Only run in browser
    
    // Ping immediately
    this.ping();
    
    // Set up interval
    this.intervalId = setInterval(() => {
      this.ping();
    }, this.PING_INTERVAL);

    console.log('Keep-alive service started');
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      console.log('Keep-alive service stopped');
    }
  }

  private async ping() {
    try {
      // Try to fetch a lightweight resource
      await fetch(window.location.origin, {
        method: 'HEAD',
        cache: 'no-cache'
      });
      console.log('Keep-alive ping sent');
    } catch (error) {
      console.log('Keep-alive ping failed:', error);
    }
  }

  // Ping when user interacts with the page
  pingOnInteraction() {
    this.ping();
  }
}

export const keepAliveService = new KeepAliveService();
