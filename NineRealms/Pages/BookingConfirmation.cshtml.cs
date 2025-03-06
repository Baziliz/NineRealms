using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace NineRealms.Pages
{
    public class BookingConfirmationModel : PageModel
    {
        public TransactionModel Transaction { get; set; }
        public DriverModel Driver { get; set; }
        public CarModel Car { get; set; }

        public void OnGet()
        {
            // ตัวอย่างข้อมูล (Mock Data)
            Transaction = new TransactionModel
            {
                BDate = DateTime.Now,
                BArrivalTime = "08:30",
                BDestination = "สำนักงานใหญ่",
                BRegister = "XYZ-1234"
            };

            Driver = new DriverModel
            {
                BName = "สมชาย ขับดี",
                BMobile = "081-234-5678",
                BPicture = "RuneAlfheim.webp" // ใช้ไฟล์รูปที่มีอยู่จริงใน wwwroot/lib/img/
            };

            Car = new CarModel
            {
                BCarModel = "Toyota Camry"
            };
        }
    }

    public class TransactionModel
    {
        public DateTime BDate { get; set; }
        public string BArrivalTime { get; set; }
        public string BDestination { get; set; }
        public string BRegister { get; set; }
    }

    public class DriverModel
    {
        public string BName { get; set; }
        public string BMobile { get; set; }
        public string BPicture { get; set; }
    }

    public class CarModel
    {
        public string BCarModel { get; set; }
    }
}
