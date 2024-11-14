import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ClientRegistrationForm = () => {
  return (
    <div className="flex justify-center">
      <Card className="max-w-md w-full">
        <CardContent>
          <form className="space-y-6">
            <div className="text-left">
              <Label htmlFor="name" className="block">Nombre</Label>
              <Input id="name" type="text" placeholder="Ingrese su nombre" />
            </div>
            <div className="text-left">
              <Label htmlFor="lastName" className="block">Apellido</Label>
              <Input id="lastName" type="text" placeholder="Ingrese su apellido" />
            </div>
            <div className="text-left">
              <Label htmlFor="phone" className="block">Teléfono</Label>
              <Input id="phone" type="tel" placeholder="Ingrese su número" />
            </div>
            <div className="text-left">
              <Label htmlFor="email" className="block">Email</Label>
              <Input id="email" type="email" placeholder="Ingrese su email" />
            </div>
            <Button type="submit">Registrarse</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientRegistrationForm;