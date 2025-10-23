import Chatbot from "../base/Chatbot";
import ErrorBoundary from "../base/ErrorBoundary";
const ChatbotpageView = () => {
  return (
    <>
      <ErrorBoundary>
        <Chatbot />
      </ErrorBoundary>
    </>
  );
};

export default ChatbotpageView;
