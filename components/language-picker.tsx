import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';
import Image from 'next/image';
import GbFlag from '@/public/icons/gb.svg';
import RuFlag from '@/public/icons/ru.svg';
import Link from 'next/link';

function LanguagePicker() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Languages width={25} height={25} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href="/en" className="flex gap-2">
            <Image
              src={GbFlag}
              alt="Great Britain flag"
              width={24}
              className="rounded-full"
            />
            English
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/ru" className="flex gap-2">
            <Image
              src={RuFlag}
              alt="Russian flag"
              width={24}
              className="rounded-full"
            />
            Русский
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguagePicker;
