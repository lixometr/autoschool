import useGlobalLoading from "@/compositions/useGlobalLoading";
import { UserModule } from "@/store/modules/user";
const gLoading = useGlobalLoading()
gLoading.show();

export default async function () {
    await UserModule.init()
    gLoading.hide()

}