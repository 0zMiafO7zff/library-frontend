import React from "react";
import Navbar from './Navbar';

export default function BorrowBook_data() {
  return (
    <>
    <Navbar />
      <section className="bb-data">
        <div className="container w-[760px] mx-auto mt-8">
          <div className="bb-borrow-box-head bg-green-600 text-white p-2 text-xl">
            <h1>ข้อมูลสถิติของห้องสมุด</h1>
          </div>
          <div className="bb-borrow-box-main flex flex-row gap-4 w-full justify-center shadow-xl p-4">
            <div className="flex flex-col bg-red-200 w-full">

              <div className="bb-borrow-box-info bg-white">
                <div className="bb-data-box m-4 shadow-xl p-4">
                  <h2 className="flex text-xl">หนังสือทั้งหมด (เล่ม)</h2>
                  <div className="bb-data text-8xl font-bold text-center">5</div>
                </div>
              </div>

              <div className="bb-borrow-box-info bg-white">
                <div className="bb-data-box m-4 shadow-xl p-4">
                  <h2 className="flex text-xl">สมาชิกทั้งหมด (คน)</h2>
                  <div className="bb-data text-8xl font-bold text-center">5</div>
                </div>
                
              </div>
            </div>

            <div className="flex flex-col bg-red-200 w-full">

              <div className="bb-borrow-box-info bg-white">
                <div className="bb-data-box m-4 shadow-xl p-4">
                  <h2 className="flex text-xl">การใช้บริการยืม-คืนหนังสือ (ครั้ง)</h2>
                  <div className="bb-data text-8xl font-bold text-center">5</div>
                </div>
              </div>

              <div className="bb-borrow-box-info bg-white">
                <div className="bb-data-box m-4 shadow-xl p-4">
                  <h2 className="flex text-xl">หนังสือค้างส่ง (เล่ม)</h2>
                  <div className="bb-data text-8xl font-bold text-center">2</div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
