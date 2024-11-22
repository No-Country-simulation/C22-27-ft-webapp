import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles: string[];
}

const useMockAuth = () => {
  return {
    isAuthenticated: true,
    userRole: "Medicos",
  };
};
const ProtectedRoute = ({
  children,
  allowedRoles = [],
}: ProtectedRouteProps) => {
  const { isAuthenticated, userRole } = useMockAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
    return (
      <Navigate to="/unauthorized" state={{ from: location }} replace={true} />
    );
  }

  return <>{children}</>;
};
export default ProtectedRoute;
