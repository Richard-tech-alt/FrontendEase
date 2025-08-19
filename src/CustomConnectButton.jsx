import React, { useState } from 'react';
import { useConnect, useAccount, useDisconnect } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const CustomConnectButton = () => {
  const { connectors, connect, isPending } = useConnect();
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();
  const [isConnecting, setIsConnecting] = useState(false);

  // Function to auto-connect with the most common wallet
  const autoConnect = async () => {
    setIsConnecting(true);
    
    try {
      // Try to connect with MetaMask first (most common)
      const metaMaskConnector = connectors.find(
        connector => connector.name.toLowerCase().includes('metamask')
      );
      
      if (metaMaskConnector) {
        await connect({ connector: metaMaskConnector });
        return;
      }

      // If MetaMask not available, try injected wallet
      const injectedConnector = connectors.find(
        connector => connector.name.toLowerCase().includes('injected')
      );
      
      if (injectedConnector) {
        await connect({ connector: injectedConnector });
        return;
      }

      // If no injected wallet, show the modal for other options
      document.querySelector('[data-testid="rk-connect-button"]')?.click();
      
    } catch (error) {
      console.error('Auto-connect failed:', error);
      // Fallback to showing the modal
      document.querySelector('[data-testid="rk-connect-button"]')?.click();
    } finally {
      setIsConnecting(false);
    }
  };

  if (isConnected) {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center',  
        gap: '10px',
        padding: '10px 20px',
        color: 'white',
        borderRadius: '12px',
        border: 'none',
        cursor: 'pointer'
      }}>
        <div style={{ 
          width: '8px', 
          height: '8px', 
          backgroundColor: '#22c55e', 
          borderRadius: '50%' 
        }} />
        <span>{address?.slice(0, 6)}...{address?.slice(-4)}</span>
        <button 
          onClick={() => disconnect()}
          style={{
            marginLeft: '10px',
            padding: '5px 10px',
            backgroundColor: 'rgba(255,255,255,0.2)',
            border: 'none',
            borderRadius: '6px',
            color: 'white',
            cursor: 'pointer',
            fontSize: '12px'
          }}
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative' }}>
      {/* Hidden default RainbowKit button for fallback */}
      <div style={{ display: 'none' }}>
        <ConnectButton />
      </div>
      
      {/* Custom connect button */}
      <button
        onClick={autoConnect}
        disabled={isPending || isConnecting}
        style={{
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: isPending || isConnecting ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          minWidth: '160px',
          justifyContent: 'center'
        }}
        onMouseOver={(e) => {
          if (!isPending && !isConnecting) {
            e.target.style.transform = 'translateY(-1px)';
          }
        }}
        onMouseOut={(e) => {
          if (!isPending && !isConnecting) {
            e.target.style.backgroundColor = '#3b82f6';
            e.target.style.transform = 'translateY(0)';
          }
        }}
      >
        {isPending || isConnecting ? (
          <>
            <div style={{
              width: '16px',
              height: '16px',
              border: '2px solid #ffffff40',
              borderTop: '2px solid #ffffff',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }} />
            Connecting...
          </>
        ) : (
          <>
            Connect Wallet
          </>
        )}
      </button>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default CustomConnectButton;