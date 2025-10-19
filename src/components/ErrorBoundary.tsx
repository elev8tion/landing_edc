import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen gradient-bg text-white flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            <AlertTriangle className="w-24 h-24 text-amber-400 mx-auto mb-8" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Something Went <span className="text-gradient">Wrong</span>
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="glass-card glass-card-hover px-8 py-4 font-semibold"
            >
              Refresh Page
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mt-8 p-4 bg-red-500/20 rounded-xl text-left">
                <p className="font-semibold mb-2">Error Details:</p>
                <pre className="text-sm overflow-auto">{this.state.error.toString()}</pre>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
